export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            people: [],
            planets: []
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()   
                setStore({loading: !store.loading})
            },
            getPeople() {
                const store = getStore()
                if(store.people.length === 0){
                    const endpoint = "https://swapi.dev/api/people/"
                const config = {
                    method: "GET"
                }
                    fetch(endpoint, config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({people:json.results})
                    })
                }
            },
            getPlanets() {
                const store = getStore()
                if(store.planets.length === 0){
                    const endpoint2 = "https://swapi.dev/api/planets/"
                    const config2 = {
                        method: "GET"
                    }
                    fetch(endpoint2, config2).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({planets:json.results})
                    })
                }  
            }
        }
    }
}