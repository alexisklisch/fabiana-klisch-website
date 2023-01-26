import { Link } from "wouter";

export function Header() {
  return (
    <header class="mb-8 px-4 pt-6 max-w-6xl mx-auto">
      <Link class="cursor-pointer" href="/">
        <a>
          <img src="/logo.png" alt="Logo de Fabiana Klisch" />
        </a>
      </Link>
    </header>
  )
}