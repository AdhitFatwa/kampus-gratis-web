import { Tab } from "@headlessui/react";

import { BaseLayout } from "../modules/layout/BaseLayout";
import ScoreSection from "../modules/nilai-dan-sertifikat/ScoreSection";
import FooterCredit from "../components/footer/FooterCredit";
import { useState } from "react";
import { CertificateSection } from "../components/nilai-dan-sertifikat/CertificateSection";

const NilaiSertifikat = () => {
  const [detailStatus, setDetailStatus] = useState(false);

  return (
    <>
      <BaseLayout title="Nilai & Sertifikat" />
      <section className="py-1 bg-[#FAFAFA] px-6 md:px-14 lg:px-16">
        <main className="max-w-[1440px] mx-auto min-h-[80vh] py-4">
          <Tab.Group>
            <Tab.List
              as={"div"}
              className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
            >
              <Tab
                as={"div"}
                onClick={() => {
                  setDetailStatus(false);
                }}
              >
                {({ selected }) => (
                  <div
                    className={`${
                      selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                    } py-2 px-4 cursor-pointer`}
                  >
                    Nilai
                  </div>
                )}
              </Tab>
              <Tab as={"div"}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div
                    className={`${
                      selected ? "border-b-2 outline-none  border-primary-500 text-primary-500" : ""
                    } py-2 px-4 cursor-pointer`}
                  >
                    Sertifikat
                  </div>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ScoreSection detailStatus={detailStatus} setDetailStatus={setDetailStatus} />
              </Tab.Panel>
              <Tab.Panel>
                <CertificateSection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>
      </section>
      <FooterCredit />
    </>
  );
};

export default NilaiSertifikat;
