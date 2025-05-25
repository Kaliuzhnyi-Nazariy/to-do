export default function Footer() {
  return (
    <footer>
      <ul className="flex justify-around mt-auto bg-[var(--darkpurple)] h-[50px] text-[10px] items-center">
        <li className="w-[75px] text-center">
          &copy; Made by Kaliuzhnyi Nazarii
        </li>
        <li className="w-[75px] text-center">
          <a href="https://github.com/Kaliuzhnyi-Nazariy">Git-hub</a>
        </li>
        <li className="w-[75px] text-center">
          <a href="mailto:kaliuzhnyinazariijob@gmail.com">Email me</a>
        </li>
      </ul>
    </footer>
  );
}
