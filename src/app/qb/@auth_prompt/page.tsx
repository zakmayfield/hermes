import Link from "next/link";

const client_id = process.env.QB_CLIENT_ID;
const redirect_uri = process.env.QB_REDIRECT_URI;
const state = process.env.QB_STATE;
const scope = process.env.QB_SCOPE;
const baseOAuthURL = process.env.QB_OAUTH_URL;

export default function Page() {
  const OAuthUrl = `${baseOAuthURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

  return (
    <div className="bg-primary p-lg rounded-md space-y-sm w-md mx-auto">
      <h2>No QuickBooks account linked</h2>

      <p className="text-foreground/70">
        Please connect to your QuickBooks Online account to continue
      </p>

      <Link
        className="p-xs rounded-lg border block w-full text-center cursor-pointer opacity-80 hover:opacity-100"
        href={OAuthUrl}
      >
        Link QuickBooks Account
      </Link>
    </div>
  );
}
