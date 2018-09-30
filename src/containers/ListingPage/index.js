import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {Loader1} from '../../components/Loader/index.jsx';
import { changeshowlist } from '../../actions/changeshowlist'
import ShopList from '../../components/ShopList';
import './listingpage.css'

import page03 from '../../images/bg-page_03.jpg';

export class ListingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      shoplist: {products:[]},
      category: [],
      selected: null,
      priceFilter: {lower:8,upper:80}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.setState({selected  : parseInt(id)})
    fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/category?filter=FEATURED')
      .then(result=>result.json())
      .then(category=>this.setState({category}))
    fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products?lang=en&category='+id+'&start=0&count=12')
      .then(result=>result.json())
      .then(shoplist=>this.setState({ shoplist: shoplist }))
    this.setState({loaded: true})
  }

  setFilter (filter) {
    this.setState({selected  : filter})
    var category = "";
    (filter === ""? category = "" : category = filter)
    fetch('http://ec2-35-183-25-66.ca-central-1.compute.amazonaws.com:8080/api/v1/products?lang=en&category='+category+'&start=0&count=12')
      .then(result=>result.json())
      .then(shoplist=>this.setState({ shoplist: shoplist }))
  }

  isActive (value){
    return 'a '+((value===this.state.selected) ?'active':'default');
  }

  priceFilter() {
    var lower = this.refs.price_lower.innerHTML;
    var upper = this.refs.price_upper.innerHTML;

    const newFilter = Object.assign({}, this.state.priceFilter)
    newFilter.lower = parseFloat(lower.replace("$",""));
    newFilter.upper = parseFloat(upper.replace("$",""));
    // const newFilter = this.state.category.slice(0)
    this.setState({ priceFilter: newFilter })
    console.log(newFilter);
  }

  countCategory = (category_id) => {
    let count = 0;
    this.state.shoplist.products.forEach((product)=> {
      if(product.categories){
        product.categories.forEach((productCategory)=> {
          if(productCategory.id === category_id) count++
        })
      }
    })
    return count;
  }

  renderItem (children, ind){
    console.log(children);
    return (
      <li key={ind}>
        <a className="a">{children.description.name}</a>
        <span className="number">{this.countCategory(children.id)}</span>
      </li>
    )
  }

  render() {
    if(this.state.loaded){
      var categoryChildrens = {}
      this.state.category.forEach((category) => {
        if(category.id === this.state.selected){
          categoryChildrens = category
          console.log(category)
        }
      })
      return (
        <div id="listingpage">
          <Loader1/>
          <section>
            <div className="pageintro">
              <div className="pageintro-bg">
                <img src={page03} alt="About Us"/>
              </div>
              <div className="pageintro-body">
                <h1 className="pageintro-title">Shop</h1>
                <nav className="pageintro-breadcumb">
                  <ul>
                    <li>
                      <Link to={"/productdetails"}>Home</Link>
                    </li>
                    <li>
                      <a className="a">Shop</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          <section>
            <div className="container p-t-100 p-b-70">
              <div className="row">
                <div className="col-md-9">
                  <div className="shop-list">
                    <div className="shop-list-heading">
                    </div>
                    <div className="shop-list-body shop-grid">
                      {
                        this.state.shoplist.products.map((list, ind) =>
                          <ShopList key={ind} list={list} priceFilter={this.state.priceFilter}/>
                        )
                      }
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="page-sidebar">

                    <div className="page-sidebar-item">
                      <div className="sidebar-item__heading">
                        <h3 className="title">filter by price</h3>
                        <div className="title-border m-b-30"></div>
                      </div>
                      <div className="sidebar-item__body m-b-8">
                        <div className="sidebar-filter-price">
                          <div id="filter-price"></div>
                          <div className="filter-range">
                            <div className="filter-range-value">
                              Filter:
                              <span id="filter-price-value-lower" ref="price_lower">$100</span>
                              <span> - </span>
                              <span id="filter-price-value-upper" ref="price_upper">$500</span>
                            </div>
                            <div className="filter-button">
                              <a className="a" onClick={()=>this.priceFilter()}>Filter</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="page-sidebar-item">
                      <div className="sidebar-item__heading">
                        <h3 className="title">categories</h3>
                        <div className="title-border m-b-24"></div>
                      </div>
                      <div className="sidebar-item__body">
                        <ul className="sidebar-list">
                          {
                            // this.state.category.map((category) => {
                            //   if(category.id === this.state.selected){
                            //     category.children.map((children, ind)=>{
                            //       this.renderItem(children, ind)
                            //     })
                            //   }
                            // })
                            categoryChildrens.children.map((children, ind)=> {
                              this.renderItem(children, ind)
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}
const showDispatchToProps = (dispatch) => {
  return {
    // showtype: bindActionCreators(changeshowlist, dispatch)
    showtype : (e) => dispatch(changeshowlist(e)),
    // sdf: ()=> {console.log(dispatch)}
  }
}

export default connect(mapStateToProps, showDispatchToProps) (ListingPage);