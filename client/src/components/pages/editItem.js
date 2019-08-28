import React, {Component} from "react"
import { updateItem, fetchItem } from "../../store/actions";
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'


class EditItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                item:'',
                description:'',
                category:'',
                price:'',
            }
        }
    }

    componentDidMount(){
        this.props.fetchItem();
        document.title = 'umts - Edit';
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateItem(this.state.data.id, this.state.data)
       
    };

      handleChange = event => {
        event.preventDefault();
        this.setState({data: {...this.props.data, [event.target.name]: event.target.value} });
      };
     
    render() {
        console.log(this.state.data)
    return (
        <div>
            <h1>Edit Item</h1>
            <form onSubmit={this.handleSubmit}>
                <span>
                    <label>
                        Name
                        <input type="text" value={this.state.data.item} name="item" onChange = {this.handleChange} />
                    </label>
                </span>
            </form>
            <button type='submit'>Update</button>
        </div>
    )
}
}
export default connect(null,{updateItem, fetchItem}) (EditItem);