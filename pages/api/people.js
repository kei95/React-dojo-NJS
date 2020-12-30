import { people } from "../../data/people";

export default function handler(req, res) {
  res.statusCode = 200;
  res.status(200).json(people);
}
