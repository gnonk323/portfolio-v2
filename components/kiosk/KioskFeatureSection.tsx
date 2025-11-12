"use client";

import FeatureSection from "../FeatureSection";
import { useState } from "react";
import { motion } from "motion/react";
import { DemoImage } from "../Visuals";
import { Paragraph } from "../Typography";

export default function KioskFeatureSection() {
  return (
    <FeatureSection
      heading="Key Features"
      features={[
        {
          title: "Service Requests",
          description:
            "Authenticated hospital staff can send various service requests.",
          content: (
            <>
              <Paragraph>
                A core requirement of the application was the ability for a
                logged-in staff member to be able to use the kiosk to make a
                service request of their choice, as well as view any active
                service requests. Our group chose to follow a dashboard approach
                to making and viewing service requests. The user picks the
                service request they’d like to make using the dropdown menu at
                the top of the form on the right, fills out the form, and
                submits it to the hospital’s system (not actually). Upon their
                submission, the active request appears in the table on the left,
                which is complete with sorting and filtering capabilities. The
                staff member can also choose to expand the active requests
                table.
              </Paragraph>
              <DemoImage
                src="/images/kiosk/dashboard-demo.gif"
                alt="Service Requests Demo"
              />
            </>
          ),
        },
        {
          title: "Pathfinding",
          description:
            "Multi-floor map navigation system to help patients and visitors find their way around the hospital.",
          content: <Pathfinding />,
        },
        {
          title: "Map Editing",
          description:
            "Admin users can edit the map nodes and edges of the hospital map through a table interface, or by dragging and dropping on the map.",
          content: (
            <>
              <Paragraph>
                When logged in, admins (not just any staff members) are able to
                delete all of the map nodes and edges and upload new nodes and
                edges. They are also able to interact directly with the map,
                where they can drag nodes and edges, delete individual nodes and
                edges, and edit the location of nodes by changing their X and Y
                coordinates.
              </Paragraph>
              <DemoImage
                src="/images/kiosk/map-edit.png"
                alt="Map Editing Screenshot"
              />
            </>
          ),
        },
        {
          title: "Admin Dashboard",
          description: "Service request management and statistics.",
          content: (
            <>
              <Paragraph>
                Staff members can view a statistics page, where they can find a
                wide variety of information breaking down the distribution of
                the number of requests. There are bar charts showing the number
                of requests by type, priority, status, and user, and a pie chart
                showing the percentage of requests by any of those same
                parameters.
              </Paragraph>
              <DemoImage
                src="/images/kiosk/stats.png"
                alt="Admin Dashboard Screenshot"
              />
            </>
          ),
        },
      ]}
    />
  );
}

function Pathfinding() {
  const [selection, setSelection] = useState<"img" | "gif">("gif");

  return (
    <>
      <Paragraph>
        One of the main features of the application was that it had to be able
        to give the user directions from one point of the hospital to another,
        using a pathfinding algorithm of their choice. It also had to provide
        text directions, guiding the user down hallways, telling them which way
        to turn, and which elevators and stairways they should use. My team
        implemented an additional feature which allows the user to scan a QR
        code containing the directions, so they can follow along on their phone.
      </Paragraph>
      <div>
        <div className="flex items-center gap-4 justify-end">
          <div className="rounded border border-foreground">
            <button
              className={`px-3 py-1 border-r border-r-stone-300 cursor-pointer transition-colors ${selection === "img" ? "bg-foreground text-background border-foreground hover:bg-stone-800" : "hover:bg-stone-300"}`}
              onClick={() => setSelection("img")}
            >
              Image
            </button>
            <button
              className={`px-3 py-1 cursor-pointer ${selection === "gif" ? "bg-foreground text-background hover:bg-stone-800" : "hover:bg-stone-300"}`}
              onClick={() => setSelection("gif")}
            >
              GIF
            </button>
          </div>
        </div>
        <div className="mt-2">
          {selection === "img" ? (
            <div className="p-2 rounded bg-stone-300">
              <motion.img
                key={"path-img"}
                src="/images/kiosk/pathfinding.png"
                alt="Pathfinding Screenshot"
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          ) : (
            <>
              <div className="p-2 rounded bg-stone-300">
                <motion.img
                  key={"path-gif"}
                  src={"/images/kiosk/pathfinding-demo.gif"}
                  alt="Pathfinding Demo"
                  className="w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
