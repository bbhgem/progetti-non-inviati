const [test, setTest] = useState(false)

const getBook = async () => {
  try {
    const response = await fetch("https://epibooks.onrender.com/")
    const data = await response.json()
    setBooks(data)
    } catch (error) {
      console.log(error)
    }
}

useEffect(() => {
  getBook()
  console.log("sono stato eseguito")
  return () => {
    console.log("sono stato smontato")
  }
},[test])

const toggleTest = () => setTest(!test)a