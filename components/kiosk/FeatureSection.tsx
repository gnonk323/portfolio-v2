"use client";

import { FeatureCard } from "../Cards";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

enum Feature {
  ServiceRequests = "Service Requests",
  Pathfinding = "Pathfinding",
  MapEditing = "Map Editing",
  AdminDashboard = "Admin Dashboard",
}

export default function FeatureSection() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section className="min-h-screen snap-start flex items-center justify-center bg-background font-sans relative z-10 p-8 overflow-hidden">
      <AnimatePresence mode="wait">
        {!selectedFeature ? (
          <motion.div
            key="features"
            className="max-w-7xl w-full space-y-12"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h3 className="font-doto font-bold text-stone-400 text-3xl">
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <FeatureCard
                title="Service Requests"
                description="Authenticated hospital staff can send various service requests."
                onClickAction={() =>
                  setSelectedFeature(Feature.ServiceRequests)
                }
              />
              <FeatureCard
                title="Pathfinding"
                description="Multi-floor map navigation system to help patients and visitors find their way around the hospital."
                onClickAction={() => setSelectedFeature(Feature.Pathfinding)}
              />
              <FeatureCard
                title="Map Editing"
                description="Admin users can edit the map nodes and edges of the hospital
                map through a table interface, or by dragging and dropping on
                the map."
                onClickAction={() => setSelectedFeature(Feature.MapEditing)}
              />
              <FeatureCard
                title="Admin Dashboard"
                description="Service request management and statistics."
                onClickAction={() => setSelectedFeature(Feature.AdminDashboard)}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="selected"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-5xl"
          >
            <FeatureSelected
              feature={selectedFeature}
              back={() => setSelectedFeature(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FeatureSelected({
  feature,
  back,
}: {
  feature: Feature;
  back: () => void;
}) {
  return (
    <div className="space-y-6">
      <button
        onClick={back}
        className="flex gap-2 items-center px-3 py-1 rounded-full hover:bg-stone-300 cursor-pointer border border-stone-500 transition-colors"
      >
        <ArrowLeft size={16} />
        All Features
      </button>
      <div>
        <h2 className="font-doto font-bold text-3xl text-stone-400">Feature</h2>
        <h3 className="text-5xl font-bold">{feature}</h3>
      </div>
      {(() => {
        switch (feature) {
          case Feature.ServiceRequests:
            return <ServiceRequestSection />;
          case Feature.Pathfinding:
            return <PathfindingSection />;
          case Feature.MapEditing:
            return <MapEditingSection />;
          case Feature.AdminDashboard:
            return <AdminDashboardSection />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

function ServiceRequestSection() {
  return (
    <>
      <p>
        A core requirement of the application was the ability for a logged-in
        staff member to be able to use the kiosk to make a service request of
        their choice, as well as view any active service requests. Our group
        chose to follow a dashboard approach to making and viewing service
        requests. The user picks the service request they’d like to make using
        the dropdown menu at the top of the form on the right, fills out the
        form, and submits it to the hospital’s system (not actually). Upon their
        submission, the active request appears in the table on the left, which
        is complete with sorting and filtering capabilities. The staff member
        can also choose to expand the active requests table.
      </p>
      <div className="p-2 rounded bg-stone-300">
        <img
          src={"/images/kiosk/dashboard-demo.gif"}
          alt="Service Requests Demo"
          className="w-full mb-4"
        />
      </div>
      <p className="italic text-stone-400">
        I know the quality is really bad I&apos;m sorry :(
      </p>
    </>
  );
}

function PathfindingSection() {
  const [selection, setSelection] = useState<"img" | "gif">("img");

  return (
    <>
      <p>
        One of the main features of the application was that it had to be able
        to give the user directions from one point of the hospital to another,
        using a pathfinding algorithm of their choice. It also had to provide
        text directions, guiding the user down hallways, telling them which way
        to turn, and which elevators and stairways they should use. My team
        implemented an additional feature which allows the user to scan a QR
        code containing the directions, so they can follow along on their phone.
      </p>
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
              <p className="italic text-stone-400 mt-4">
                I know the quality is really bad I&apos;m sorry :(
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function MapEditingSection() {
  return (
    <>
      <p>
        When logged in, admins (not just any staff members) are able to delete
        all of the map nodes and edges and upload new nodes and edges. They are
        also able to interact directly with the map, where they can drag nodes
        and edges, delete individual nodes and edges, and edit the location of
        nodes by changing their X and Y coordinates.
      </p>
      <div className="p-2 rounded bg-stone-300">
        <img src={"/images/kiosk/map-edit.png"} alt="Map Editing Screenshot" />
      </div>
    </>
  );
}

function AdminDashboardSection() {
  return (
    <>
      <p>
        Staff members can view a statistics page, where they can find a wide
        variety of information breaking down the distribution of the number of
        requests. There are bar charts showing the number of requests by type,
        priority, status, and user, and a pie chart showing the percentage of
        requests by any of those same parameters.
      </p>
      <div className="p-2 rounded bg-stone-300">
        <img src={"/images/kiosk/stats.png"} alt="Admin Dashboard Screenshot" />
      </div>
    </>
  );
}
