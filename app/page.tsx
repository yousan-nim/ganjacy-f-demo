import {
  Header,
  VerifyNearYou,
  DispensariesBuzz,
  Articles,
  JoinGanjacy,
} from "./components";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <Header />
          <VerifyNearYou />
          <DispensariesBuzz />
          <Articles />
          <JoinGanjacy />
        </div>
      </main>
    </div>
  );
}
