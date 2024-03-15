import useSWR from 'swr'

const fetcher = (...args) => fetch(new Request(...args), {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
      "x-api-key": "5d31c9f9-bdc8-4643-96b6-6c6ac05462a2",
    }),
    body: JSON.stringify({
      codes: ["ETH", "BTC","GRIN"],
      currency: "GBP",
      sort: "rank",
      order: "ascending",
      offset: 0,
      limit: 0,
      meta: false,
    }),
  }).then(function (response) {
       
        return response.json();
    });

  function Price() {
    const { data, error, isLoading } = useSWR('https://api.livecoinwatch.com/coins/map', fetcher, { refreshInterval: 1000 })
   
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
   console.log(data[1].rate)
    // render data
    return <div>BTC: £{data[0].rate}</div>
  }
  
  export default Price;