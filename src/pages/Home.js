import Header from "../Components/Header";
const style = {
    fontSize : "2rem",
};
export default function Home() {
    return (
        <div>
            <Header/>
            <h2 style={style}>Home Page</h2>
        </div>
    )
}