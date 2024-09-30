import { modal } from "@/blockchain-provider";
import { GetServerSideProps } from "next";
import { useAppKitAccount } from "@reown/appkit/react";
import { useState, useEffect } from 'react'


interface Props {
  data: string;
}

export default function Crash({ data }: Props) {
  const { address } = useAppKitAccount();

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
