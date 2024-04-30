import { Component } from 'react'
import CommentList from './Commentlist'
import AddComment from './AddComment'
const URL = 'https://striveschool-api.herokuapp.com/api/comments/'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount = async () => {
    try {
      const resp = await fetch(URL + this.props.bookId, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmYTdhMDI4MzJlODAwMTk4NzMwYjUiLCJpYXQiOjE3MTQzOTkyODcsImV4cCI6MTcxNTYwODg4N30.nnv202j_wZhkeAVFlNyy29DzXdworYBkTkocu0wXEhs',
        },
      })

      if (resp.ok) {
        const comments = await resp.json()
        this.setState({ comments: comments })
      } else {
        throw new Error('Error retrieving data from comments')
      }
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  render() {
    return (
      this.state.comments && (
        <div className="border  rounded-bottom">
          <CommentList commentsToShow={this.state.comments} />
          <AddComment asin={this.props.bookId} />
        </div>
      )
    )
  }
}

export default CommentArea
