import Link from "../Link/Link";
import Logo from "../../assets/icons/logo.png"


export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
            <Link texto="Home" redirect="/" />
            <Link texto="Blog" redirect="/blog" />
            <Link texto="Contato" redirect="/contato" />
            <Link texto="Tete" redirect="/teste" />
            </nav>
        </header>
    )
}
