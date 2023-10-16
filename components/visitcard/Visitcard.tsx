
const Visitcard = () => {
   return (
      <div style={{
         width: 300,
         aspectRatio: 16 / 9,
         border: "1px solid white",
         padding: 15,
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
         alignItems: "center",
         gap: 10,
         zIndex: 10,
         backgroundColor: "gray",
         perspective: 1000,
         boxShadow: "0 30vh 50px 4px black",
      }} >
         <h1 className="text-2xl">Amin Karkhi</h1>
         <h2 className="text-1xl">Software Engineer</h2>
      </div>
   )
}

export default Visitcard
