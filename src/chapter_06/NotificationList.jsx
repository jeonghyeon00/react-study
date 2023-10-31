import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 김봉석입니다.",
    imgSrc:
      "https://i.namu.wiki/i/A4aptbF45vJ4pDRssGMnOQpgUD7Y-HQN95yL8PMnUb2L5GRakIU48sNJQ8SAOqZ0K13V-21-ERG89XK8RjLpsSrSbpwwGpFN7Ml-7u2kHIq3HkkDt3HlPrVg04x9WwKp84x93vXTMiYylkv2QUx87Q.webp",
  },
  {
    id: 2,
    message: "봉석이 아빠 김두식입니다.",
    imgSrc:
      "https://i.namu.wiki/i/pOpjBsblRlAVymE5Nv2_kQkFx1raZ9GPqT5aDn5nhGsXCn-2fMEzfeOlIxW--cJv-y8OqcBmtH1USDHAXNTq6UCjjBDwZK5KPGAS1UhCdRUsI3mLdf_uPbB3-vQF8wuFKSa3IECKbGEwNTZHwNrN9g.webp",
  },
  {
    id: 3,
    message: "김영탁입니다.",
    imgSrc:
      "https://i.namu.wiki/i/6p7dlRm8uVxWe0Po1R_7vQLsi4t2CXLGlUEgQ6GM4jbcbidJnymIEBDcB1uuf8v283647jPXGt_KxcU-ri5de-mwfDMFvwDjrg7y4pjZJDbpMDmF_5B-PFqCUCdSFj3jDicMQStQ-2Kod1ac28DJEA.webp",
  },
  {
    id: 4,
    message: "이재만입니다.",
    imgSrc:
      "https://i.namu.wiki/i/raPqkdn2uQ8t7o-PyrYvNjknZtool2R11aKc0P0jEmRGhp_dzqE-PYIaNFiCSCT50EC2k6cXyu65dpipZSxbxtatoIWbnhWnBaynZx4sajFQuTe5RBrImdt9FQGYhbQxjzXByhn_NzMPp4yAL4_vxw.webp",
  },
  {
    id: 5,
    message: "북한의 김덕윤입니다.",
    imgSrc:
      "https://i.namu.wiki/i/3B5n0IOFpzHcncjGSDgSioqPLO_F1UBvtEloqJhvypZ6LFinEL98YUB6BIBC7RrP8RuJ5dGF7wnFjCZSRdrVhQQ3ob3UQyICvRm0Pbexrh9ZRgSZFKKhAuFt2UelNxZ2T5A3IlwGgG9r6hXGZADkhQ.webp",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
              imgSrc={notification.imgSrc}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
