export default function Footer() {
  return (
    <footer>
      <ul className="flex justify-around mt-auto bg-[var(--darkpurple)] h-[50px] text-[10px] items-center md:h-20 md:text-[16px] 2xl:h-[90px] 2xl:text-[32px]">
        <li className="w-[75px] text-center md:w-[200px] 2xl:w-[375px]">
          &copy; Made by Kaliuzhnyi Nazarii
        </li>
        <li className="w-[75px] text-center md:w-[200px] 2xl:w-[375px]">
          <a href="https://github.com/Kaliuzhnyi-Nazariy">Git-hub</a>
        </li>
        <li className="w-[75px] text-center md:w-[200px] 2xl:w-[375px]">
          <a href="mailto:kaliuzhnyinazariijob@gmail.com">Email me</a>
        </li>
      </ul>
    </footer>
  );
}
