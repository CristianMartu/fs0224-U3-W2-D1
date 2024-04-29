import { Component } from 'react'
import { Badge, Card, Col } from 'react-bootstrap'
import SingleComment from './SingleComment'

class SingleBook extends Component {
  state = {
    selected: false,
  }
  change = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }
  render() {
    return (
      <Col key={this.props.type.asin}>
        <Card onClick={this.change} className={this.state.selected ? 'border-danger' : 'border-secondary'}>
          <Card.Img
            variant="top"
            src={this.props.type.img}
            className="w-100 d-block"
            style={{ aspectRatio: 1 / 1, height: '480px' }}
          />
          <Card.Body>
            <Card.Title style={{ minHeight: '5rem', lineHeight: '1.2rem', fontSize: '1.2rem' }}>
              {this.props.type.title}
            </Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text>{this.props.type.category}</Card.Text>
              <Badge
                className={this.state.selected ? 'align-self-start p-2 bg-danger' : 'align-self-start p-2 bg-secondary'}
              >
                {this.props.type.price}
              </Badge>
            </div>
            {this.state.selected && <SingleComment bookId={this.props.type.asin} />}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
