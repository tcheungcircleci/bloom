import React, { useContext } from "react"
import { t, GridSection, ViewItem, GridCell } from "@bloom-housing/ui-components"
import { ListingContext } from "../../ListingContext"

const DetailListingIntro = () => {
  const listing = useContext(ListingContext)

  return (
    <GridSection
      className="bg-primary-lighter"
      title={t("listings.sections.introTitle")}
      grid={false}
      inset
    >
      <GridSection columns={3}>
        <GridCell span={2}>
          <ViewItem label={t("listings.listingName")}>{listing.name}</ViewItem>
        </GridCell>
        <ViewItem label={t("listings.developer")}>{listing.developer}</ViewItem>
      </GridSection>
    </GridSection>
  )
}

export default DetailListingIntro