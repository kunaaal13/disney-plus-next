import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import Image from 'next/image';
import Head from 'next/head';

function Login() {
  const router = useRouter();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/');
        }
      }),
    [router]
  );

  return (
    <div>
      <Header />
      <section className="relative">
        <Head>
          <title>Log in | Disney+</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image src="/images/hero-background.jpg" layout="fill" objectFit="cover" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
            <Image
              src="/images/cta-logo-one.svg"
              width="600"
              height="150"
              objectFit="contain"
              alt=""
            />
            <button
              onClick={() => signInWithPopup(auth, provider)}
              className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]"
            >
              Get all there
            </button>
            <p className="text-xs text-center ">
              Get Premier Access Game of Thrones for an additional fee with a Disney+ subscription.
              As of 04/26/22, the price of Disney+ and The Disney Bundle will increase by 300₹.
            </p>
            <Image
              src="/images/cta-logo-two.png"
              width="600"
              height="70"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
