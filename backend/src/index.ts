import express from 'express'

const app = express()
const port = process.env.PORT || 3001

// allow CORs from localhost:5173
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => {
  const mealPlan = {
    Saturday: 'Pizza',
    Sunday: 'Burgers',
    Monday: 'Tacos',
    Tuesday: 'Pasta',
    Wednesday: 'Salad',
    Thursday: 'Chicken',
    Friday: 'Sandwiches',
  }

  res.json(mealPlan)
})

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`)
})
