import { Disclosure as TailwindDisclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { FC } from "react";

type Props = {
  children: any;
  title: string;
};

const Disclosure: FC<Props> = ({ children, title }) => {
  return (
    <div className="mx-auto w-full max-w-md   p-2">
      <TailwindDisclosure>
        {({ open }) => (
          <>
            <TailwindDisclosure.Button className="flex w-full rounded-lg bg-[#102B44] px-4 py-2 text-left text-sm font-medium text-white hover:bg-[#153757] focus:outline-none focus-visible:ring focus-visible:ring-[#00FFA4] focus-visible:ring-opacity-75">
              <ChevronRightIcon
                className={`${open ? "rotate-90 transform" : ""} h-5 w-5 `}
              />
              <span>{title}</span>
            </TailwindDisclosure.Button>
            <TailwindDisclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {children}
            </TailwindDisclosure.Panel>
          </>
        )}
      </TailwindDisclosure>
    </div>
  );
};

export default Disclosure;
