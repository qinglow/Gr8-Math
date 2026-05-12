import { useEffect } from 'react';

export default function PrivacyPolicy({ onBack }: { onBack: () => void }) {
    // Automatically scroll to top when the page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page animate-fade-in">
            <button onClick={onBack} className="back-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back to Home
            </button>

            <div className="legal-card">
                <h2 className="legal-title">
                    Gr8 Math Learning Management System<br/>Privacy Policy
                </h2>
                <p className="legal-date">Effective Date: Dec. 2, 2025</p>

                <p className="legal-p" style={{ fontWeight: 700 }}>
                    Color Rush Studios (the "Company" or "PIC") is committed to protecting your Personal Data in compliance with the Philippine DPA of 2012. This Privacy Policy explains how Color Rush Studios, acting as the Personal Information Controller (PIC), collects, uses, protects, and handles your Personal Data in compliance with the Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012 (DPA), and its Implementing Rules and Regulations (IRR).
                </p>
                
                <p className="legal-p">
                    Note on Format (Layered Notice Requirement): In presenting information to you, we adopt the layered privacy notice approach, which provides key information upfront and directs you to more detailed descriptions, often using hyperlinks. For electronic processing, where the format may be limited, a link to this comprehensive notice is always readily available.
                </p>

                <h3 className="legal-h3">Summary of Data Processing</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="legal-table">
                        <thead>
                            <tr>
                                <th style={{ width: '33%' }}>Category</th>
                                <th>Summary of Data Processing</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: 700 }}>What Data We Collect & Why We Collect It</td>
                                <td>We collect your Identity Data (including Full Name, Email, and Learner Reference Number - LRN), Professional Data (e.g., Teaching Achievements), and User Content (assignments, quizzes, lesson logs) to run the Gr8 Math platform. To provide the core LMS services and fulfill our contract with you (Service Provision). We use the data to monitor usage and improve the platform (Legitimate Interest). Direct Marketing requires your separate, specific consent.</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Consent for Minors</td>
                                <td>If the user is under 18 years old, we require the verifiable consent of a Parent/Guardian before processing the Minor User's personal data.</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>How Long We Keep It</td>
                                <td>Data is kept only as long as necessary. Key account data is archived for an audit period of three (3) years following account closure, and consent records are retained for ten (10) years.</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Your Rights</td>
                                <td>You have the Right to Access, Right to Correction/Rectification, Right to Object (to processing), and the Right to Erasure (Right to be Forgotten).</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Contact for Inquiries</td>
                                <td>For questions or to exercise your rights, please contact our Data Protection Officer: Hannah Mae Reyes at dpo@colorrush.com.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="legal-p" style={{ fontWeight: 700, color: '#1A4C8B' }}>By proceeding, you consent to this processing.</p>

                <h3 className="legal-h3">I. Identity of the Personal Information Controller (PIC) and Contact Details</h3>
                <ul className="legal-list">
                    <li><strong>Personal Information Controller (PIC) / Organization:</strong> Color Rush Studios</li>
                    <li><strong>Business Address:</strong> Color Rush Building, 17th Ave., Fort Bonifacio, Taguig City</li>
                    <li><strong>Contact Number / Official Email:</strong> 09*********/main@colorrush.com</li>
                    <li><strong>Data Protection Officer (DPO):</strong> Name: Hannah Mae Reyes | Contact Details: dpo@colorrush.com</li>
                </ul>

                <h3 className="legal-h3">II. Personal Data Collected</h3>
                <p className="legal-p">We collect Personal Data that is adequate, relevant, suitable, necessary, and not excessive in relation to our declared purpose, upholding the principle of Proportionality.</p>
                <ol className="legal-list" style={{ listStyleType: 'decimal' }}>
                    <li><strong>Identity Data:</strong> Full Name, Date of Birth, Gender, Learner's Reference Number</li>
                    <li><strong>Contact Data:</strong> Email Address, Phone Number.</li>
                    <li><strong>Technical Data/Usage Data:</strong> IP address, device type, operating system, usage logs, browser type.</li>
                    <li><strong>User Content:</strong> Assignments, quizzes, daily lesson logs, lessons, and other similar educational materials submitted by Clients for the purpose of instruction, assessment, and record-keeping on the Gr8 Math platform.</li>
                    <li><strong>Minor User Data:</strong> For users below 18, we require the verifiable consent of the Parent/Guardian to process the Minor User's personal data, in compliance with R.A. 10173.</li>
                </ol>

                <h3 className="legal-h3">III. Purposes and Legal Basis for Processing</h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="legal-table">
                        <thead>
                            <tr>
                                <th>Purpose of Processing</th>
                                <th>Description/Scope of Processing</th>
                                <th>Legal Basis (DPA Section)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Service Provision / Contract Fulfillment</td>
                                <td>To register your account, manage access, process transactions, and provide the core functions (LMS/courseware) of Gr8 Math</td>
                                <td>Contractual Obligation (Sec. 21(b)) or Consent (Sec. 21(a))</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Product Improvement / Data Analytics</td>
                                <td>To monitor usage, conduct statistical research, analyze trends, and improve the user experience.</td>
                                <td>Legitimate Interest (Sec. 21(g)) or Consent (Sec. 21(a))</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Direct Marketing</td>
                                <td>To send promotional materials, special offers, and tailored advertisements.</td>
                                <td>Specific and Informed Consent (Sec. 21(a))</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 700 }}>Compliance and Security</td>
                                <td>To respond to legal obligations, detect fraud, enforce our Terms and Conditions, and manage personal data breaches.</td>
                                <td>Legal Obligation (Sec. 21(c)) or Public Safety (Sec. 21(e))</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="legal-h3">IV. Data Subject Rights and Consent Mechanisms</h3>
                <h4 className="legal-h4">A. Data Subject Rights (Rule VIII)</h4>
                <p className="legal-p">As a Data Subject, you are entitled to exercise your rights under the DPA:</p>
                <ol className="legal-list" style={{ listStyleType: 'decimal' }}>
                    <li><strong>Right to be Informed:</strong> You have the right to be informed whether your personal data is being processed, including profiling and automated decision-making. We must furnish you with all information contained in this policy (identity of PIC, purposes, recipients, retention period, etc.).</li>
                    <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data, including processing for direct marketing, automated processing, or profiling. When you object, we shall stop processing the data unless the processing is pursuant to a subpoena, necessary for a contract/service, or a legal obligation.</li>
                    <li><strong>Right to Access:</strong> You have the right to reasonable access, upon demand, to the contents of your processed data, the sources from which the data was obtained, the recipients, the manner of processing, and information regarding automated processes.</li>
                    <li><strong>Right to Rectification/Correction:</strong> You have the right to dispute the inaccuracy or error in your personal data and have the PIC correct it immediately.</li>
                    <li><strong>Right to Erasure or Blocking:</strong> You have the right to suspend, withdraw, or order the blocking, removal, or destruction of your personal data when, for example, the data is incomplete, unlawfully obtained, or no longer necessary for the purpose of collection, or you withdraw consent and there is no other legal basis for processing.</li>
                    <li><strong>Right to Data Portability:</strong> Where your data is processed by electronic means and in a structured format, you have the right to obtain a copy of such data in a format that allows for further use.</li>
                    <li><strong>Right to Damages:</strong> You shall be indemnified for damages sustained due to inaccurate, incomplete, or unauthorized use of personal data.</li>
                </ol>

                <h4 className="legal-h4">B. Mechanism for Obtaining Valid Consent</h4>
                <p className="legal-p">Consent is a specific, informed indication of will and must be evidenced by written, electronic, or recorded means.</p>
                <ul className="legal-list">
                    <li><strong>No Implied Consent:</strong> Implied or inferred consent is generally prohibited.</li>
                    <li><strong>Clear Assenting Action:</strong> Consent must be given through a clear assenting action, such as clicking a dedicated button. Silence or pre-ticked boxes do not constitute consent. Granularity: If the data is processed for multiple unrelated purposes (e.g., service provision, and separately, for direct marketing), consent must be given specifically for each purpose.</li>
                </ul>

                <h4 className="legal-h4">C. Withdrawal of Consent</h4>
                <p className="legal-p">Consent can be withdrawn at any time.</p>
                <ul className="legal-list">
                    <li><strong>Ease of Withdrawal:</strong> Withdrawing consent must be as easy as, if not easier than, giving consent.</li>
                    <li><strong>Interface:</strong> If a service-specific user interface (like a log-in account) was used to obtain consent, that same interface should be used for withdrawing consent.</li>
                    <li><strong>Consequences:</strong> Upon withdrawal, we are obliged to implement procedures to suspend, withdraw, or order the blocking, removal, or destruction of your personal data from our systems.</li>
                </ul>

                <h3 className="legal-h3">VI. Data Retention and Disposal</h3>
                <p className="legal-p">You must adhere to the principle that Personal Data shall not be retained longer than necessary.</p>
                <ol className="legal-list" style={{ listStyleType: 'decimal' }}>
                    <li><strong>Retention Period:</strong> Personal Data is retained only for the period necessary to fulfill the purpose for which it was collected, or as required by law. Specifically:
                        <ul style={{ listStyleType: 'lower-alpha', paddingLeft: '24px', marginTop: '8px' }}>
                            <li style={{ marginBottom: '8px' }}>Active Account Data: Retained for the duration the user maintains an active Gr8 Math account.</li>
                            <li style={{ marginBottom: '8px' }}>Post-Closure Data: Key Identity and User Content data will be archived for an audit period of three (3) years following account closure, after which it will be securely disposed of.</li>
                            <li style={{ marginBottom: '8px' }}>Consent and Transaction Records: Retained for ten (10) years after the last activity, to comply with Philippine statutes of limitations for contractual claims.</li>
                        </ul>
                    </li>
                    <li><strong>Disposal:</strong> Upon termination of the processing, personal data will be disposed of or discarded in a secure manner that prevents further processing, unauthorized access, or disclosure.</li>
                </ol>

                <h3 className="legal-h3">VII. Security Measures and Breach Notification</h3>
                <p className="legal-p">We implement reasonable and appropriate organizational, physical, and technical security measures to maintain the availability, integrity, and confidentiality of your personal data against accidental or unlawful destruction, alteration, and disclosure.</p>
                <p className="legal-p">Technical measures include:</p>
                <ul className="legal-list">
                    <li>Encryption of personal data during storage and while in transit. Authentication processes.</li>
                    <li>Regular monitoring for security breaches and testing/evaluation of security effectiveness.</li>
                </ul>
                <p className="legal-p">
                    <strong>Personal Data Breach Notification:</strong> In the event of a personal data breach, we shall notify the National Privacy Commission and the affected Data Subjects within seventy-two (72) hours upon knowledge that a breach requiring notification has occurred. Notification is required if sensitive personal information or information enabling identity fraud is acquired by an unauthorized person, and this acquisition is likely to give rise to a real risk of serious harm to you.
                </p>

                <h3 className="legal-h3">VIII. Updates to this Policy</h3>
                <p className="legal-p">
                    We may update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the revised Policy. We will notify you of any substantial changes, and if the processing purpose changes, you will be given the opportunity to withhold consent.
                </p>
            </div>
        </div>
    );
}