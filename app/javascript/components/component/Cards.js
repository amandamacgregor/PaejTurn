import React from "react"
import PropTypes from "prop-types"
import { Card, CardHeader, CardImg, CardBody,
  CardTitle, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  
class Cards extends React.Component {
      constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
   
  }
  
   toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  render () {
    const { landmark } = this.props
    
    return (
      <React.Fragment>
        <Card className="landmarkCard">
        <CardHeader>{landmark.title}</CardHeader>
        <CardBody>
        <CardImg top width="100%" src="http://placekitten.com/200/150" alt="Card image cap" />
          <CardText>Located at {landmark.address}, {landmark.city}, {landmark.state} {landmark.zip}.</CardText>
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="dropDown">
              <DropdownToggle caret>
                More Info
              </DropdownToggle>
              <DropdownMenu className="dropDown">
                <DropdownItem disabled>Alcohol: {landmark.alcohol}</DropdownItem>
                <DropdownItem disabled>Description: {landmark.description}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
        </CardBody>
      </Card>
      </React.Fragment>
    );
  }
}

export default Cards