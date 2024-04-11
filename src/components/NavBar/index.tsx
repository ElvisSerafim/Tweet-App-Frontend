"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import PointsDisplay from "../PointsDisplay";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const pathname = usePathname();

  return (
    <Navbar isBordered className={` bg-transparent border-white text-white`}>
      <NavbarBrand
        className={`${pathname.includes("login") && "justify-center"}`}
      >
        <p className="font-bold text-inherit">T W E E T &nbsp; A P P</p>
      </NavbarBrand>
      {!pathname.includes("login") && (
        <NavbarContent as="div" justify="end">
          <div className="flex flex-row items-center gap-4">
            <Dropdown
              className="bg-light-black text-white"
              backdrop="opaque"
              placement="bottom-end"
            >
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  color="secondary"
                  size="sm"
                  icon={<AvatarIcon />}
                  classNames={{
                    base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                    icon: "text-black/80",
                  }}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14">
                  <div className="flex flex-col gap-2 font-semibold">
                    <p className="text-base">
                      Hello, Elvis Michael Souza Serafim! 😃
                    </p>
                  </div>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  className="text-danger mt-1"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {!pathname.includes("campaign") && (
              <div className="flex flex-row gap-2 items-center">
                <PointsDisplay points={10} />
              </div>
            )}
          </div>
        </NavbarContent>
      )}
    </Navbar>
  );
};

export default NavbarComponent;
