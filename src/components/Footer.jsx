export default function Footer() {
    return (
        <footer className="bg-light mt-5">
            {/* Links */}
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center py-3">
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link px-2 text-body-secondary"
                                href="#">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center py-3">
                <span className="text-body-secondary">© 2025 Company, Inc</span>
            </div>
        </footer>
    );
}
