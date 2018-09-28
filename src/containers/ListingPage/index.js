import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {Loader1} from '../../components/Loader/index.jsx';
import { changeshowlist } from '../../actions/changeshowlist'
import ShopList from '../../components/ShopList';
import './listingpage.css'

import page03 from '../../images/bg-page_03.jpg';
import Grid from '../../images/icon/layout_grid.png';
import List from '../../images/icon/layout_list.png';

export class ListingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      shoplist: {products:[]},
      category: [],
      selected: null,
      pricefilter: {lower:{},upper:{}}
    };
  }
  gridshowtype() {
    this.props.showtype(this.refs.grid.id)
  }
  listshowtype() {
    this.props.showtype(this.refs.list.id)
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

  pricefilter() {
    var lower = this.refs.price_lower.innerHTML;
    var upper = this.refs.price_upper.innerHTML;
    console.log(lower);
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

  renderItem = (category, ind) => {
    return(
      <li key={ind}>
        <a className={this.isActive(category.id)} onClick={()=>this.setFilter(category.id)}>{category.description.name}</a>
        <span className="number">{this.countCategory(category.id)}</span>
        {
          (category.children.length > 0 ?
            <ul className="children-list childrencartegory">
              {
                category.children.map((children, ind) =>
                  <li key={ind}>
                    <a className={this.isActive(children.id)} onClick={()=>this.setFilter(children.id)}>{children.description.name}</a>
                    <span className="number">{this.countCategory(children.id)}</span>
                  </li>
                )
              }
            </ul>
            : ''
          )
        }
      </li>
    )
  }

  render() {
    if(this.state.loaded){
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
                      <div className="number-product">
                        Showing
                        <span>8</span>-
                        <span>20</span> of
                        <span>64</span> results
                      </div>
                      <div className="shop-view-layout">
                        <span>Show</span>
                        <span id="layout_grid" ref="grid" onClick={()=>this.gridshowtype()}>
                          <img src={Grid} alt="Grid"/>
                        </span>
                        <span id="layout_list" ref="list" onClick={()=>this.listshowtype()}>
                          <img src={List} alt="List"/>
                        </span>
                      </div>
                    </div>
                    <div className="shop-list-body shop-grid">
                      {
                        this.state.shoplist.products.map((list, ind) =>
                          <ShopList key={ind} list={list}/>
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
                              <a className="a" onClick={()=>this.pricefilter()}>Filter</a>
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
                          <li>
                            <a className={this.isActive(null)} onClick={()=>this.setFilter(null)}>All</a>
                            <span className="number">{this.state.shoplist.products.length}</span>
                          </li>
                          {
                            this.state.category.map((category, ind) => this.renderItem(category, ind))
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