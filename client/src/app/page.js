import Playground from "./components/Playground";

import { sentence } from "./sentence";

export default function Home() {
  return (
    <main>
      <Playground sentence={sentence} />
    </main>
  );
}
