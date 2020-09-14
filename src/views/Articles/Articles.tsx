import React, { Component } from "react";
import "./Articles.scss";
import { connect } from "react-redux";
import { fetchArticles } from "./store/actions";
import { getArticles, getLoading, getError } from "./store/selectors";
import Section from "../../components/Section/Section";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading/Loading";
import ArticleItem from "./ArticleItem/ArticleItem";
import ErrorList from "../../components/ErrorList/ErrorList";
import { ArticlesState } from "./store/types";
import { StoreApp } from "../../store.models";

type ArticlesProps = {
  fetchArticles: Function;
} & ArticlesState;

class Articles extends Component<ArticlesProps> {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { loading, error, articles }: ArticlesProps = this.props;

    return (
      <Section className="article-page">
        <Heading title="Articles" />
        {loading ? (
          <Loading />
        ) : (
          (error && <ErrorList message={error} />) ||
          articles.map(({ id, ...article }) => (
            <ArticleItem key={id} article={article} />
          ))
        )}
      </Section>
    );
  }
}

const mapStateToProps = ({ articlesState }: StoreApp) => ({
  articles: getArticles(articlesState),
  loading: getLoading(articlesState),
  error: getError(articlesState),
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
