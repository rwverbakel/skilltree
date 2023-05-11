import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gxixpdclconshgkgjkam.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4aXhwZGNsY29uc2hna2dqa2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3ODk1MDQsImV4cCI6MTk5OTM2NTUwNH0.DUUEecay6tia2Sa1QIZRH_fqV0U1vx7rc0og8OX2uYc"
);

function App() {
  const [leerlingen, setLeerlingen] = useState([]);

  useEffect(() => {
    getLeerlingen();
  }, []);

  async function getLeerlingen() {
    const { data } = await supabase.from("Leerlingen").select();
    setLeerlingen(data);
  }

  return (
    leerlingen.length === 0 ? <div>No data</div> :
      <ul>
        {leerlingen.map((leerling) => (
          <li key={leerling.uuid}>{leerling.voornamen} {leerling.voorvoegsel} {leerling.achternaam}</li>
        ))}
      </ul>
  );
}

export default App;