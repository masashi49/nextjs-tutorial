//import useSWR from 'swr'
import fetch from 'node-fetch'
const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() )


function TestSwr () {

    //const { data, error } = useSWR( 'http://api.calil.jp/library?appkey=041e8f7ad23fc2d777496f383a5634dc&pref=%E5%A4%A7%E9%98%AA%E5%BA%9C&city=%E6%9E%9A%E6%96%B9%E5%B8%82', fetcher )
    // if ( error ) return <div>failed to load</div>
    // if ( !data ) return <div>loading...</div>
}

export default TestSwr
