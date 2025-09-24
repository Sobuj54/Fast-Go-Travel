import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PackageOverview from "./PackageOverview";
import ItineraryTimeline from "./ItineraryTimeline";

import InclusionsExclusions from "./InclusionsExclusions";
import TermsAndConditions from "./TermsAndConditions";

const PackagesTabs = () => {
  return (
    <Tabs defaultValue="overview" className="w-full mx-2 md:mx-0">
      {/* Wrap in relative container to prevent body scroll */}
      <div className="overflow-x-auto scrollbar-hide -mx-3 md:mx-0">
        <TabsList className="flex min-w-max bg-white px-3 md:px-0">
          <TabsTrigger value="overview" className="flex-shrink-0">
            Overview
          </TabsTrigger>
          <TabsTrigger value="itinenary" className="flex-shrink-0">
            Day wise Itinerary
          </TabsTrigger>
          <TabsTrigger value="inclusion" className="flex-shrink-0">
            Inclusion/Exclusions
          </TabsTrigger>
          <TabsTrigger value="info" className="flex-shrink-0">
            Additional Info
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview" className="w-full">
        <PackageOverview />
      </TabsContent>
      <TabsContent value="itinenary" className="w-full">
        <ItineraryTimeline />
      </TabsContent>
      <TabsContent value="inclusion" className="w-full">
        <InclusionsExclusions />
      </TabsContent>
      <TabsContent value="info" className="w-full">
        <TermsAndConditions />
      </TabsContent>
    </Tabs>
  );
};

export default PackagesTabs;
