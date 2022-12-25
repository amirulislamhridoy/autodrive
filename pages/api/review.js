import reviews from '../../database/Reviews.json';

export default function review(req, res) {
    res.status(200).json(reviews)
  }
  