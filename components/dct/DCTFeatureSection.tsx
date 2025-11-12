import FeatureSection from "../FeatureSection";
import { Paragraph } from "../Typography";
import { DemoVideo } from "../Visuals";

export default function DCTFeatureSection() {
  return (
    <FeatureSection
      heading="Demos"
      columns={1}
      features={[
        {
          title: "Create Project",
          description:
            "Students create projects for their teammates to join, so they can collaboratively collect data.",
          content: (
            <>
              <Paragraph>
                Once logged in, if a student is not already a member of a
                project, they can join an existing project or create a new one.
                Once the project is created, they can invite other students to
                join using the project code.
              </Paragraph>
              <DemoVideo src="/images/dct/create-account.mp4" />
            </>
          ),
        },
        {
          title: "Create Form",
          description:
            "A form is a reusable data structure. They are usable by anyone in the project and are the main method of data collection.",
          content: (
            <>
              <Paragraph>
                Forms are a flexible, resusable data structure that is used to
                collect data in our app. Any student in a project can create or
                use any of the forms in the project. A form is created once and
                can be used any number of times. In the demo, a form is being
                created to track car traffic for a specific location. Interview
                forms are an extended type of form that includes additional
                fields for live interview notes and audio recording, which can
                be transcribed using AI after the interview is completed.
              </Paragraph>
              <DemoVideo src="/images/dct/create-form.mp4" />
            </>
          ),
        },
        {
          title: "Map Page",
          description: "View form entries on a map.",
          content: (
            <>
              <Paragraph>
                Each form entry can be geotagged with the user&apos;s current
                location or a custom location. These entries can then be viewed
                on the map, and filterd by date range. The color of the pin
                indicates whether it represents a data point or an interview,
                and if mutliple entries were collected at the same location the
                number above the pin indicates how many entries were collected
                at that location.
              </Paragraph>
              <DemoVideo src="/images/dct/map-page.mp4" />
            </>
          ),
        },
      ]}
    />
  );
}
