import { colors } from "@/assets/colors";

const Visitcard: React.FC = () => {
   return (
      <div
         style={{
            width: 300,
            aspectRatio: 16 / 9,
            border: `2px solid ${colors.Violet}`,
            padding: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            zIndex: 10,
            backgroundColor: colors.Navy,
            opacity: 0.9,
            borderRadius:3,
            perspective: 1000,
            boxShadow: "0 30vh 50px 4px black",
         }}
      >
         <h1 className="text-2xl">Amin Karkhi</h1>
         <h2 className="text-1xl">Software Engineer</h2>
      </div>
   );
};

export default Visitcard;
