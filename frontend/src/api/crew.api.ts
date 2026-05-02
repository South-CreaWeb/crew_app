const API_URL: string = "http://localhost:3000/crew"

export async function getCrews()  {

  try {
      const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }

}


export async function createCrew(data: {name: string, role: string}) {

  try {
      const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
