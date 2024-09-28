import { modal } from "@/blockchain-provider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <button
        onClick={() => {
          modal.open();
        }}
      >
        open
      </button>

      <Link href="/crash">
        <div>Test</div>
      </Link>
    </div>
  );
}
