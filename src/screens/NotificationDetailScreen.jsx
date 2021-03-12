import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


export default function NotificationScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Zenon公式アプリリリースのお知らせ</Text>
        <Text style={styles.textDate}>2021-03-25 22:00</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.bodyText}>吾輩は猫である。名前はまだ無い。どこで生れたか頓（とん）と見當がつかぬ。何でも薄暗いじめじめした所でニヤーニヤー泣いて居た事丈は記憶して居る。吾輩はこゝで始めて人間といふものを見た。然（しか）もあとで聞くとそれは書生といふ人間中で一番獰悪（だうあく）な種族であつたさうだ。此書生といふのは時々我々を捕（つかま）へて煮て食ふといふ話である。然し其當時は何といふ考（かんがへ）もなかつたから別段恐しいとも思はなかつた。但（たゞ）彼の掌（てのひら）に載せられてスーと持ち上げられた時何だかフハフハした感じが有つた許（ばか）りである。掌の上で少し落ち付いて書生の顔を見たのが所謂（いはゆる）人間といふものゝ見始（みはじめ）であらう。此時妙なものだと思つた感じが今でも殘つて居る。第一毛を以て装飾されべき筈の顔がつるつるして丸で薬罐（やくわん）だ。其後猫にも大分逢つたがこんな片輪には一度も出會（でく）はした事がない。加之（のみならず）顔の眞中が餘りに突起して居る。そうして其穴の中から時々ぷうぷうと烟（けむり）を吹く。どうも咽（む）せぽくて實に弱つた。是が人間の飲む烟草（たばこ）といふものである事は漸く此頃（このごろ）知つた。此書生の掌の裏（うち）でしばらくはよい心持に坐つて居つたが、暫くすると非常な速力で運轉し始めた。書生が動くのか自分丈（だけ）が動くのか分らないが無暗に眼が廻る。胸が惡くなる。到底助からないと思つて居ると、どさりと音がして眼から火が出た。夫迄（それまで）は記憶して居るがあとは何の事やらいくら考へ出さうとしても分らない。</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  titleContainer: {
    height: 96,
    width: '100%',
    backgroundColor: '#5BB57A',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  textDate: {
    color: '#FFFFFF',
    marginTop: 8,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});