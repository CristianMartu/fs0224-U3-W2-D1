import { ButtonGroup, Container, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    list: this.props.data,
    genre: 'all',
    search: '',
  }

  render() {
    const filteredBooks = this.state.list.filter((book) =>
      book.title.toLowerCase().includes(this.state.search.toLowerCase())
    )
    return (
      <Container>
        <ButtonGroup className="mt-2">
          <DropdownButton as={ButtonGroup} title="Category" id="bg-nested-dropdown" variant="dark">
            <Dropdown.Item eventKey="1" onClick={() => this.setState({ genre: 'fantasy' })}>
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => this.setState({ genre: 'history' })}>
              History
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" onClick={() => this.setState({ genre: 'horror' })}>
              Horror
            </Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={() => this.setState({ genre: 'romance' })}>
              Romance
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={() => this.setState({ genre: 'scifi' })}>
              Scifi
            </Dropdown.Item>
            <Dropdown.Item eventKey="5" onClick={() => this.setState({ genre: 'all' })}>
              All
            </Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        <h1 className="text-center">
          EpiBooks: <span className="fw-normal">{this.state.genre}</span>
        </h1>
        <Form.Control
          type="text"
          className="w-50 mx-auto"
          onChange={(e) => this.setState({ search: e.target.value })}
          value={this.state.value}
          placeholder="Search book..."
        />
        <Row
          className="justify-content-center mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-gap-3"
          id="container"
        >
          {this.state.genre !== 'all'
            ? filteredBooks
                .filter((book) => book.category === this.state.genre)
                .map((book, i) => <SingleBook type={book} key={'Book: ' + i} />)
            : filteredBooks.map((book, i) => <SingleBook type={book} key={'Book: ' + i} />)}
        </Row>
      </Container>
    )
  }
}

export default BookList
