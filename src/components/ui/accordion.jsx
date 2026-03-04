import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext({
  openItems: [],
  toggleItem: () => {},
});

const Accordion = ({ type = "single", collapsible = false, children, ...props }) => {
  const [openItems, setOpenItems] = React.useState([]);

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems((prev) => {
        if (prev.includes(value)) {
          return collapsible ? [] : prev;
        }
        return [value];
      });
    } else {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  );
};
Accordion.displayName = "Accordion";

const AccordionItem = ({ className, value, children, ...props }) => {
  const { openItems } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <div className={cn("border-b border-border", className)} data-state={isOpen ? "open" : "closed"} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, isOpen });
        }
        return child;
      })}
    </div>
  );
};
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({ className, children, value, isOpen, ...props }) => {
  const { toggleItem } = React.useContext(AccordionContext);

  return (
    <h3 className="flex">
      <button
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all text-left",
          className
        )}
        onClick={() => toggleItem(value)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </h3>
  );
};
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = ({ className, children, value, isOpen, ...props }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn("overflow-hidden text-sm transition-all duration-200", className)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
