import { useState, useEffect } from 'react'

export const TestText = (): JSX.Element => {
  type Menu = {
    Saturday: string,
    Sunday: string,
    Monday: string,
    Tuesday: string,
    Wednesday: string,
    Thursday: string,
    Friday: string
  }

  const [menu, setMenu] = useState<Menu>({
    Saturday: '',
    Sunday: '',
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: ''
  })
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001')
      const data: Menu = await response.json()
      setMenu(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {menu.Saturday
        ?
          Object.keys(menu).map((day, index) => {
            const meal = menu[day as keyof Menu]
            return (
              <ul key={index}>
                <li>{day}: {meal}</li>
              </ul>
            )
          })
        : 'Loading...'}
    </div>
  )
}
