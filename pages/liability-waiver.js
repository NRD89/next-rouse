import Layout from "../components/Layout"

const LiabilityWaiver = () => {
  return (
    <Layout>
      <div className="w-full text-center">
        <h1 className="h1 font-red-hat-display">Rouse Yoga Liability Waiver</h1>
      </div>
      <div className="w-full mt-10">
        <div className="mx-auto max-w-prose">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            It is your responsibility to ensure you have consulted a doctor or
            physician before engaging in physical activity. Rouse Yoga is not
            responsible for any injury that occurs during your engagement in our
            classes. Due to our live streaming platform (a one-way camera view),
            our instructors will not be able to see you or monitor you during
            your participation in classes. It is your responsibility to be aware
            of your limitations while engaging in physical activity.
          </p>

          <h2 className="h4 font-red-hat-display mb-4">
            Please read the following:
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I understand that yoga includes physical movements as well as an
            opportunity for relaxation, stress re-education and relief of
            muscular tension. As is the case with any physical activity, the
            risk of injury, even serious or disabling, is always present and
            cannot be entirely eliminated. If I experience any pain or
            discomfort, I will listen to my body, discontinue the activity, and
            seek support from a medical professional. I assume full
            responsibility for any and all damages, which may incur through
            participation. Yoga is not a substitute for medical attention,
            examination, diagnosis or treatment. Yoga is not recommended and is
            not safe under certain medical conditions. By signing up for a
            membership with Rouse Yoga, I affirm that a licensed physician has
            verified my good health and physical condition to participate in
            such a fitness program. In addition, I will be aware of any medical
            conditions or physical limitations before I begin class. If I am
            pregnant, become pregnant or I am post-natal or post-surgical, my
            membership subscription verifies that I have my physician's approval
            to participate. I also affirm that I alone am responsible to decide
            whether to practice yoga and participation is at my own risk. I
            hereby agree to irrevocably release and waive any claims that I have
            now or may have hereafter against Rouse Yoga LLC, its owners,
            officers, employees, and instructors. I have read and fully
            understand and agree to the above terms of this Agreement and
            Release of Waiver of Liability. I voluntarily agree and recognize
            that by signing up for a membership it serves as complete and
            unconditional release of all liability to the greatest extent
            allowed by law in the State of California.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            *Mental Health Services Disclaimer: Traditional yogic practices
            including but not limited to poses, breathing, and meditation are
            thought to improve some markers and symptoms related to various
            conditions defined as mental illnesses. Rouse Yoga does not wish to
            suggest that the classes offered at Rouse are a replacement for
            medication and/or psychotherapy. The Rouse Yoga site provides lists
            of mental health resources for those who need additional care. If it
            becomes clear to the Rouse Yoga team that a client is in need of a
            level of care that falls outside Rouse Yoga’s services and
            qualifications, the client in question will be referred to other
            resources. If you, the client, indicate that you are a threat to
            yourself or others, Rouse Yoga LLC will report you to the
            appropriate authorities.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default LiabilityWaiver
