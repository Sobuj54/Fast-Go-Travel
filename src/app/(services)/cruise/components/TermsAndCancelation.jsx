import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TermsAndCancelation() {
  const accordion = [
    {
      title: "Cancellation Policy",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ex autem fugiat atque omnis. Rem rerum totam odio ea sapiente sequi, voluptates, cupiditate excepturi deserunt dignissimos blanditiis? Aperiam ipsa incidunt non mollitia, consequatur a assumenda quas nisi vero, deserunt optio iure repellendus ratione, temporibus eos earum quo dolorem odit nostrum.",
    },
    {
      title: "Payment Terms",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ex autem fugiat atque omnis. Rem rerum totam odio ea sapiente sequi, voluptates, cupiditate excepturi deserunt dignissimos blanditiis? Aperiam ipsa incidunt non mollitia, consequatur a assumenda quas nisi vero, deserunt optio iure repellendus ratione, temporibus eos earum quo dolorem odit nostrum.",
    },
    {
      title: "Travel Documents",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ex autem fugiat atque omnis. Rem rerum totam odio ea sapiente sequi, voluptates, cupiditate excepturi deserunt dignissimos blanditiis? Aperiam ipsa incidunt non mollitia, consequatur a assumenda quas nisi vero, deserunt optio iure repellendus ratione, temporibus eos earum quo dolorem odit nostrum.",
    },
    {
      title: "Frequently Asked Questions",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ex autem fugiat atque omnis. Rem rerum totam odio ea sapiente sequi, voluptates, cupiditate excepturi deserunt dignissimos blanditiis? Aperiam ipsa incidunt non mollitia, consequatur a assumenda quas nisi vero, deserunt optio iure repellendus ratione, temporibus eos earum quo dolorem odit nostrum.",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto my-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-7">
        Terms & Cancellation Policy
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl border px-4 rounded-md shadow-md"
        defaultValue="item-1"
      >
        {accordion.map((val) => (
          <AccordionItem
            value={val.title}
            key={val.title}
            className="border-b-[1px]"
          >
            <AccordionTrigger>{val.title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>{val.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
