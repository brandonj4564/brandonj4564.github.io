'use client';

import SendMeEmailForm from "../../components/SendMeEmailForm";
import Socials from "../../components/Socials";

export default function ContactPage() {
    return <div>
        <Socials />

        <SendMeEmailForm onSubmit={() => { }} />
    </div>;
}