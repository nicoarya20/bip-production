// import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";

import BasicAppShell from "../Viewlayout/page";
import { Avatar, Badge, Card, CardSection, Center, Group, Image, Stack, Text } from "@mantine/core";
export default function Dashboard() {

  
   return (
      <BasicAppShell>
         <Stack align="center" justify="center" h={"100vh"}>
      <Card withBorder radius={"md"}>
         <CardSection>
            <a>
               <Image src="https://statik.tempo.co/data/2023/03/09/id_1187418/1187418_720.jpg" height={"fixed"} alt="" />
            </a>
         </CardSection>

         <Badge size="lg" variant="gradient">Outstanding</Badge>
         <Text fw={500}>Resident Evil 2 Remake</Text>
         <Text>
         Resident Evil 4 Remake adalah game yang telah lama ditunggu-tunggu oleh para penggemar seri Resident Evil. 
         Dengan menghadirkan kembali karakter ikonik Leon S. Kennedy dan petualangan yang menegangkan, game ini menjanjikan pengalaman baru yang segar bagi para pemain.   
         </Text>

         <Group justify="space-between">
            <Center>
               <Avatar
               src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"}
            
               ></Avatar>
            </Center>

         </Group>

      </Card>
      </Stack>
      </BasicAppShell>
   );
}