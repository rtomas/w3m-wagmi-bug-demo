import { modal } from "@/blockchain-provider";
import { GetServerSideProps } from "next";
import { useAccount } from "wagmi";

interface Props {
  data: string;
}

export default function Crash({ data }: Props) {
  const { address } = useAccount();

  return (
    <div
      onClick={() => {
        modal.open();
      }}
    >
      hehe: {address}
      data: {data}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  return {
    props: {
      data: "1111",
    },
  };
};
