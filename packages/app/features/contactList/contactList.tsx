"use client";

import { H1, Paragraph, Separator, YStack } from "@my/ui";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

const ContactList: React.FC = () => {
  const [phoneInfo, setPhoneInfo] = useState<any>(null);

  const loadData = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data) {
        const nameNumbers = [];
        // data.map((contact) => {
        //   if (contact && contact.hasOwnProperty("phoneNumbers") && contact.phoneNumbers[0]) {
        //     return { name: contact?.phoneNumbers[0] };
        //   }
        // });

        return data;
      }
    }
  };

  useEffect(() => {
    (async () => {
      const data = await loadData();
      if (data) {
        setPhoneInfo(data);
      }
    })();
  }, []);

  console.log("info", phoneInfo);
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack>
        <H1 ta="center">Welcome to HELL.</H1>
        <Paragraph ta="center">These should be all of your contacts</Paragraph>

        <Separator />
      </YStack>
    </YStack>
  );
};

export default ContactList;
