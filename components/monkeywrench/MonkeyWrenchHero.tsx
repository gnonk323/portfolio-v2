import { NextProjectButton } from "../Button";
import Separator from "../Separator";
import { SubHeading, Paragraph } from "../Typography";
import { Wrench } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex grow xl:justify-between xl:items-center flex-col xl:flex-row">
        <img
          src={"/images/monkeywrench/monkeywrenchMOCK.png"}
          alt="Landing page"
          className="max-h-[60vh] w-auto"
          loading="eager"
        />
        <div className="lg:space-y-8 space-y-6 lg:px-32 xl:pt-0 pt-8">
          <SubHeading>Overview</SubHeading>
          <div className="space-y-4">
            <Paragraph>
              MonkeyWrench is a powerful, full-stack web application designed to streamline the operations of auto repair shops
              while ensuring complete customer transparency. It features a distinct customer portal and an advanced employee
              management system.
            </Paragraph>
            <div className="space-y-3">
              <Paragraph>
                <span className="font-semibold">Customer Experience:</span> Customers can request quotes as a guest by uploading
                damage images and schedule appointments immediately. After claiming their profile, they can utilize threaded,
                in-app messaging with staff and view the real-time status and progress of their active quotes and repairs.
              </Paragraph>
              <Paragraph>
                <span className="font-semibold">Operational Control:</span> Shop employees use an advanced system to review
                quotes, send estimates, and manage repairs. Tasks are meticulously organized into departments and task groups,
                and enforce workflow with prerequisite-based dependencies.
              </Paragraph>
              <Paragraph>
                <span className="font-semibold">Intelligent Visualization:</span> Shop owners and employees gain instant clarity
                with two specialized views for active repairs: the Heat Map, which shows task load by department, and the
                Timeline, which provides a detailed Gantt-style view of all repair durations and milestones.
              </Paragraph>
            </div>
            <Paragraph className="p-4 rounded border-2 border-emerald-600 bg-emerald-500/15 font-semibold text-emerald-600 flex items-center gap-2">
              <Wrench size={16} />
              This project is currently under development!
            </Paragraph>
          </div>
        </div>
      </div>
      <Separator className="md:my-16 my-8" />
      <div>
        <NextProjectButton className="m-0!" name="Hospital Kiosk" href="/kiosk" />
      </div>
    </>
  );
}
