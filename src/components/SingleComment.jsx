import { Component } from 'react'
import { Card } from 'react-bootstrap'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

class SingleComment extends Component {
  state = {
    bookReviews: null,
  }

  fetchBook = async () => {
    try {
      const resp = await fetch(URL + this.props.bookId, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTQzOTkyODcsImV4cCI6MTcxNTYwODg4N30.nnv202j_wZhkeAVFlNyy29DzXdworYBkTkocu0wXEhs',
        },
      })

      if (resp.ok) {
        const book = await resp.json()
        this.setState({ bookReviews: book })
        console.log(book)
      } else {
        throw new Error('Error retrieving data from comments')
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  componentDidMount() {
    this.fetchBook()
  }

  render() {
    return (
      //   this.state.bookReviews && this.state.bookReviews.map((element) => <Card.Text key={element._id}>prova</Card.Text>)
      this.state.bookReviews !== null
        ? this.state.bookReviews.map((element) => <Card.Text key={element._id}>{element.comment}</Card.Text>)
        : console.log('altra opzione')
    )
  }
}

export default SingleComment
