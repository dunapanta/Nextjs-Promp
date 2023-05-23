"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserSignedIn = true;

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Prompt Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt Discover</p>

        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
          {isUserSignedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black-btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Nav;