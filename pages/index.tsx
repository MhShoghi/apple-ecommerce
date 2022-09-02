import { Tab } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#E9ECED]">
        <Landing />
      </main>

      <section className="relative z-40 -mt-[100vh] min-h-screen  bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-4gl text-center font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>

          <Tab.Group>
            <Tab.List className="flex justify-center text-white">
              <Tab>Tab1</Tab>
              <Tab>Tab2</Tab>
            </Tab.List>

            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 text-white sm:px-4">
              <Tab.Panel>Pannel 1</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Home;
